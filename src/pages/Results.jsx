import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = parseFloat(formData.salary || 0);
  const salaryOfYear = salary * 12;
  const bonus = parseFloat(formData.bonus || 0);
  const salaryIncomeYear = salaryOfYear + bonus;

  let expenses = Math.min(salaryIncomeYear * 0.5, 100000);

  const baby = parseInt(formData.baby || 0);
  const social = Math.min(parseFloat(formData.social * 12 || 0), 30000);
  const protect = Math.min(parseFloat(formData.protect || 0), 100000);
  const brDeduction = Math.min(baby * 30000, 60000);

  const totalDeduction = 60000 + brDeduction + social + protect;
  const income = salaryIncomeYear - expenses - (totalDeduction);

  const taxRate = income <= 100000 ? 0 :
                  income <= 300000 ? 0.05 :
                  income <= 1000000 ? 0.1 : 0.15;

  const taxRatePercentage = taxRate * 100;
  const taxAmount = income * taxRate;

  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">ผลการคำนวณ</h1>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>เงินได้ทั้งปี:</strong>{" "}
            <span className="text-blue-600">{salaryIncomeYear.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าใช้จ่าย:</strong>{" "}
            <span className="text-blue-600">{expenses.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าลดหย่อน:</strong>{" "}
            <span className="text-blue-600">{totalDeduction.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>เงินได้พึงประเมินสุทธิ:</strong>{" "}
            <span className="text-blue-600">{income.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>อัตราภาษี:</strong>{" "}
            <span className="text-blue-600">{taxRatePercentage} %</span>
          </p>
          <p className="text-lg">
            <strong>ภาษีที่ต้องชำระ:</strong>{" "}
            <span className="text-red-600 font-semibold">{taxAmount.toLocaleString()} บาท</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
