export const metadata = {
  title: "درباره ما",
  description: "درباره ما",
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
