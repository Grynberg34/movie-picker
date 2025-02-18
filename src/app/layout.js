import "../styles/global.scss";
import Provider from "@/store/provider"; // Import your Provider component

export const metadata = {
  title: "Movie Picker",
  description: "Pick a film to watch today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}