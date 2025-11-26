"use client"
import { useState, useEffect } from "react";
import { FiCreditCard, FiUser, FiInfo, FiAlertTriangle } from "react-icons/fi";
import Sidebar, { NavLink } from "@/components/layout/sidebar";
import Table from "@/components/layout/table";
import Navbar from "@/components/layout/header";
import StatusBadge from "@/components/ui/status";
import Dropdown from "@/components/ui/dropdown";
import Toast from "@/components/ui/toast";
import { useDispatch, useSelector } from 'react-redux';
import { loadTransactions } from '@/redux/slices/transactionslice';
import { RootState, AppDispatch } from '@/redux/store';
import { Transaction } from '@/types/transactions';
import TableSkeleton from "@/components/skeleton/tableskeleton";

interface ToastType {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
}

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [statusFilter, setStatusFilter] = useState<"All" | "success" | "pending" | "failed">("All");
  const [hasMounted, setHasMounted] = useState(false);
  const [toast, setToast] = useState<ToastType | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.transactions);

  const navLinks: NavLink[] = [
    { label: "Dashboard", href: "/dashboard", icon: <FiUser /> },
    { label: "Transaction", href: "/transaction", icon: <FiCreditCard /> },
  ];

  const user = { name: "John Doe", role: "Admin", username: "john_doe", avatar: "/avatar.png" };

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    dispatch(loadTransactions());

    setHasMounted(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setToast({ message: error, type: "error" });
    } else if (loading) {
      setToast({ message: "Loading transactions...", type: "info" });
    } else if (data) {
      setToast({ message: "Transactions loaded successfully.", type: "success" });
    }

    const handleOffline = () => {
      setToast({ message: "No internet connection. Please check your network.", type: "warning" });
    };

    const handleOnline = () => {
      setToast({ message: "Back online. Reconnecting...", type: "info" });
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [loading, error, data]);

  const filteredTransactions = statusFilter === "All"
    ? data?.transactions || []
    : data?.transactions.filter(tx => tx.status === statusFilter) || [];

  const toggleSidebar = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const dismissToast = () => {
    setToast(null);
  };


  const formatCurrency = (amount: number, currency: string): string => {
    const formattedAmount = amount.toLocaleString();

    switch (currency.toUpperCase()) {
      case 'USD':
        return `$${formattedAmount}`;
      case 'EUR':
        return `€${formattedAmount}`;
      case 'RWF':
        return `${formattedAmount} RWF`;
      default:
        return `${formattedAmount} ${currency}`;
    }
  };

  return (
    <div className="relative min-h-screen text-gray-800 bg-gray-100">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={dismissToast}
          duration={toast.duration}
        />
      )}

      <Sidebar
        links={navLinks}
        user={user}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleSidebar}
      />

      <div className={`transition-all duration-300 pt-[92px] flex flex-col min-h-screen ${isMenuOpen ? "ml-64" : "ml-20"}`}>
        <Navbar user={user} sidebarWidth={isMenuOpen ? 256 : 80} />

        <div className="px-6 pt-3 space-y-3">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-2xl text-[#1e293b] font-bold w-full sm:w-auto">Transactions</h1>

            <div className="w-full sm:w-40 mt-3 sm:mt-0">
              <Dropdown
                options={["All", "success", "pending", "failed"]}
                selectedOption={statusFilter}
                onSelect={(option) => setStatusFilter(option as "All" | "success" | "pending" | "failed")}
              />
            </div>
          </div>

          {loading ? (
            <TableSkeleton />
          ) : (
            <Table
              tableTitle="All Transactions"
              headers={["ID", "Recipient", "Amount", "Currency", "Type", "Status", "Date"]}
              data={filteredTransactions}
              renderRow={(tx: Transaction) => (
                <>
                  <td className="py-3 px-5">{tx.id}</td>
                  <td className="py-3 px-5">{tx.recipient}</td>
                  <td className="py-3 px-5">{tx.amount}</td>
                  <td className="py-3 px-5">{formatCurrency(tx.amount, tx.currency)}</td>
                  <td className="py-3 px-5">{tx.type}</td>
                  <td className="py-3 flex justify-start px-5">
                    <StatusBadge status={tx.status} />
                  </td>
                  <td className="py-3 px-5">{new Date(tx.date).toLocaleDateString()}</td>
                </>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
