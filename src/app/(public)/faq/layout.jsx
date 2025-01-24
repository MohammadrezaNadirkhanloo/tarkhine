export const metadata = {
  title: "سوالات متداول",
  description: "سوالات متداول",
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
