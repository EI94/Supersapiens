import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect alla lingua di default per evitare 404
  redirect("/en");
}
