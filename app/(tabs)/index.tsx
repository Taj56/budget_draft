import { getUserName, getCurrency } from "@/utils/storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const [userName, setUserName] = useState<string | null>(null);
  const [myCurrency, setMyCurrency] = useState(null);

  useEffect(()=>{
    const fetchName = async ()=>{
      const name = await getUserName();
      setUserName(name);
    }

    // const fetchCurrency = async () => {
    //   const currency = await getCurrency();
    //   setMyCurrency(currency)
    // }

    fetchName();
  })

  return (
    <SafeAreaView className="flex-1 bg-[#141118] px-5 justify-center items-center">
      <Text className="text-white">Hello {userName}, Good day.</Text>
    </SafeAreaView>
  );
}
