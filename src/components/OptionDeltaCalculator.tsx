"use client";

import React, { useState } from "react";

const TargetOptionPriceCalculator: React.FC = () => {
  const [contractPrice, setContractPrice] = useState<string>("");
  const [stockPrice, setStockPrice] = useState<string>("");
  const [expectedPrice, setExpectedPrice] = useState<string>("");
  const [delta, setDelta] = useState<string>("");
  const [optionType, setOptionType] = useState<"call" | "put">("call"); // حالة جديدة لاختيار نوع الصفقة
  const [result, setResult] = useState<number | null>(null);



  const calculatePrice = () => { 

    if (
      contractPrice &&
      stockPrice &&
      expectedPrice &&
      delta &&
      optionType
    ) {
      const contract = parseFloat(contractPrice);
      const stock = parseFloat(stockPrice);
      const expected = parseFloat(expectedPrice);
      const deltaValue = parseFloat(delta);

      let targetPrice: number;

      if (optionType === "call") {
        // حساب قيمة الكول
        targetPrice = contract + (expected - stock) * deltaValue;
      } else {
        // حساب قيمة البوت
        targetPrice = contract + (stock - expected) * deltaValue;
      }

      setResult(targetPrice);
    } else {
      alert("يرجى ملء جميع الحقول بشكل صحيح!");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-8 px-4 md:py-10 md:px-4 pb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4 md:mb-6 text-center leading-normal">
        حاسبة سعر العقد المستهدف
      </h1>
      <p className="text-sm md:text-base text-orange-300 bg-gray-900 p-4 rounded-md mb-6 leading-loose max-w-md mx-auto text-center">
        هذه الحاسبة تقريبية وليست مؤكدة وتعتمد على حركة السهم السريعة خلال مدة العقد.
        تتطلب منك وضع سعر العقد الذي اشتريته أو ستقوم بشرائه، وتضع سعر السهم وقت شراء
        العقد، ثم تضع سعر السهم الذي تتوقع أن يصل إليه السهم. في الخانة الأخيرة،
        تضع الدلتا وهي موجودة في منصة التداول الخاصة بك بجانب سعر العقد.
        يمكنك اختيار نوع الصفقة (كول أو بوت) لحساب القيمة المتوقعة للعقد.
      </p>
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div>
          <label className="block text-orange-400 font-medium mb-2 text-sm md:text-base leading-loose">
            نوع الصفقة:
          </label>
          <select
            value={optionType}
            onChange={(e) => setOptionType(e.target.value as "call" | "put")}
            className="w-full px-4 py-2 bg-black text-white border border-orange-400 rounded-md  focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm md:text-base"
          >
            <option  value="call ">كول (Call)</option>
            <option  value="put">بوت (Put)</option>
          </select>
        </div>
        <div>
          <label className="block text-orange-400 font-medium mb-2 text-sm md:text-base leading-loose">سعر العقد:</label>
          <input
            type="number"
            value={contractPrice}
            onChange={(e) => setContractPrice(e.target.value)}
            className="w-full px-4 py-2 bg-black text-white border border-orange-400 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm md:text-base"
            placeholder="أدخل سعر العقد"
          />
        </div>
        <div>
          <label className="block text-orange-400 font-medium mb-2 text-sm md:text-base leading-loose">سعر السهم:</label>
          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
            className="w-full px-4 py-2 bg-black text-white border border-orange-400 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm md:text-base"
            placeholder="أدخل سعر السهم"
          />
        </div>
        <div>
          <label className="block text-orange-400 font-medium mb-2 text-sm md:text-base leading-loose">
            سعر السهم المتوقع الوصول له:
          </label>
          <input
            type="number"
            value={expectedPrice}
            onChange={(e) => setExpectedPrice(e.target.value)}
            className="w-full px-4 py-2 bg-black text-white border border-orange-400 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm md:text-base"
            placeholder="أدخل السعر المتوقع"
          />
        </div>
        <div>
          <label className="block text-orange-400 font-medium mb-2 text-sm md:text-base leading-loose">الدلتا:</label>
          <input
            type="number"
            value={delta}
            onChange={(e) => setDelta(e.target.value)}
            className="w-full px-4 py-2 bg-black text-white border border-orange-400 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm md:text-base"
            placeholder="أدخل قيمة الدلتا"
          />
        </div>
        <button
          onClick={calculatePrice}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 text-sm md:text-base"
        >
          احسب
        </button>
      </div>
      {result !== null && (
        <div className="mt-6 bg-gray-900 p-4 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl md:text-2xl font-bold text-orange-500 leading-normal">النتيجة:</h2>
          <p className="text-base md:text-lg text-orange-300 mt-2 leading-loose">
            سعر العقد المستهدف هو:{" "}
            <span className="text-orange-500 font-bold">{result.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TargetOptionPriceCalculator;
