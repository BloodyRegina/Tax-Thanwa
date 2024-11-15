import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          แบบฟอร์มภาษีเงินได้
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div>
            <label
              htmlFor="salary"
              className="block text-gray-700 font-medium mb-2"
            >
              เงินเดือน:
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="bonus"
              className="block text-gray-700 font-medium mb-2"
            >
              โบนัส:
            </label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="social"
              className="block text-gray-700 font-medium mb-2"
            >
              หักประกันสังคมต่อเดือน:
            </label>
            <input
              type="text"
              name="social"
              id="social"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="baby"
              className="block text-gray-700 font-medium mb-2"
            >
              จำนวนบุตร:
            </label>
            <input
              type="text"
              name="baby"
              id="baby"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="protect"
              className="block text-gray-700 font-medium mb-2"
            >
              ค่าเบี้ยประกันชีวิต:
            </label>
            <input
              type="text"
              name="protect"
              id="protect"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
