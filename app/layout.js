import Nav from "@/components/Nav/Nav";
import './layout.css'


export const metadata = {
  title: "Articles",
  description: "Articles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="general-container">
          <div className="background-gradient">
            <div className="background-blur">
              <Nav />
              <div className="children-container">
                {children}
              </div>
            </div>
          </div>
      </body>
    </html>
  );
}
