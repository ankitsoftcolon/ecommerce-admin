import React, { useState } from "react";

function ProtectedLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div>ProtectedLayout</div>;
}

export default ProtectedLayout;
