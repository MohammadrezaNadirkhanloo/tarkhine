export const metadata = {
  title: "اعطای نمایندگی",
  description: "اعطای نمایندگی",
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
