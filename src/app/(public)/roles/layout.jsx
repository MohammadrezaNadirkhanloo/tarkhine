export const metadata = {
  title: "قوانین",
  description: "قوانین",
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
