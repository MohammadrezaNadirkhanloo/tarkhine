export const metadata = {
  title: "حریم خصوصی",
  description: "حریم خصوصی",
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
