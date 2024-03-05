'use client';
import Header from "./components/Layout/Header";
import MyWizard from "./components/MyWized";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      
        <Header />
        <MyWizard />
    </main>
  );
}
