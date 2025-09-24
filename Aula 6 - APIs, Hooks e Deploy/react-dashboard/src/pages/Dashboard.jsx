import { ChartsBars } from "@/components/ChartsBars";
import { PieCharts } from "@/components/PieCharts";
import Tabs from "../components/Tabs";

export default function Dashboard() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
      <div className="grid grid-cols-2 gap-15">
        <ChartsBars/>
        <PieCharts/>
      </div>
    </div>
  );
}
