export const metadata = {
  title: "دسترسی آسان",
  description: "سوالات متداول | قوانین | حریم خصوصی",
};

export default function RootLayout({ children }) {
  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
