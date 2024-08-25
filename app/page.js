// app/page.js

import AuthComponent from "@/components/AuthComponent";

export default function HomePage({session}) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <AuthComponent session={session} />
    </div>
  );
}
