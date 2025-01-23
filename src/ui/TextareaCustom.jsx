import React from "react";

/**
 * @param {Object} props
 * @param {string} [props.label] - متن برچسب
 * @param {string} [props.placeholder] - متن پیش‌فرض
 * @param {string} props.value - مقدار ورودی
 * @param {function(string): void} props.onChange - تابع مدیریت تغییر
 * @param {number} [props.rows=4] - تعداد خطوط
 * @param {number} [props.maxLength] - حداکثر تعداد کاراکترها
 * @param {string} [props.error] - پیام خطا
 * @param {boolean} [props.disabled=false] - وضعیت غیرفعال
 */
const TextAreaCustom = ({
  label,
  placeholder = "متن خود را وارد کنید...",
  value,
  onChange,
  rows = 4,
  maxLength,
  error,
  disabled = false,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* برچسب */}
      {label && (
        <label
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: error ? "red" : "#333",
          }}
        >
          {label}
        </label>
      )}

      {/* TextArea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "14px",
          borderRadius: "8px",
          border: error ? "1px solid red" : "1px solid #ccc",
          backgroundColor: disabled ? "#f9f9f9" : "#fff",
          resize: "none", // غیرفعال کردن تغییر اندازه
          outline: "none",
          transition: "border-color 0.2s",
        }}
      />

      {/* پیام خطا */}
      {error && (
        <span style={{ fontSize: "12px", color: "red" }}>{error}</span>
      )}
    </div>
  );
};

export default TextAreaCustom;
