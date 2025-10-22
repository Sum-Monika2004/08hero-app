import { toast } from "react-toastify";

const getStoredApp = () => {
  const storedAppStr = localStorage.getItem("insList");
  if (storedAppStr) {
    const storedAppData = JSON.parse(storedAppStr);
    return storedAppData;
  } else {
    return [];
  }
};

const addToDb = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    toast("App is already installed");
  } else {
    storedAppData.push(id);
    console.log(storedAppData);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("insList", data);
    toast("Installed");
  }
};

export { addToDb, getStoredApp };
