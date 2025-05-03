import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Report {
  description: string;
  locationText: string;
  time: string;
  urgent: "yes" | "no" | null;
  coordinates: { lat: number; lng: number; address?: string } | null;
  status: "pending" | "in-progress" | "resolved" | "submitted";
}

interface ReportStore {
  reports: Report[];
  addReport: (report: Report) => void;
  setCoordinates: (coords: {
    lat: number;
    lng: number;
    address?: string;
  }) => void;
  tempCoords: { lat: number; lng: number; address?: string } | null;
  deleteReport: (index: number) => void;
}

export const useReportStore = create<ReportStore>()(
  persist(
    (set) => ({
      reports: [],
      tempCoords: null,
      addReport: (report) =>
        set((state) => ({ reports: [...state.reports, report] })),
      setCoordinates: (coords) => set({ tempCoords: coords }),
      deleteReport: (index) =>
        set((state) => ({
          reports: state.reports.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "report-storage", // localStorage에 저장될 key
    }
  )
);
