import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  TextInput as RNTextInput,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getUserName,
  getCurrency,
  saveUserName,
  saveCurrency,
} from '@/utils/storage';
import { useUser } from '@/context/userContext';

const currencyOptions = ['USD', 'EUR', 'GBP', 'JMD', 'CAD'];

const Settings = () => {
  
  const { userName, currency, setUserName, setCurrency } = useUser();
  const [myCurrency, setMyCurrency] = useState<string | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [editType, setEditType] = useState<'name' | 'currency' | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const name = await getUserName();
      const currency = await getCurrency();
      setUserName(name);
      // @ts-ignore
      setMyCurrency(currency);
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    if (editType === 'name') {
      await saveUserName(inputValue);
      setUserName(inputValue);
    } else if (editType === 'currency') {
      await saveCurrency(inputValue.toUpperCase());
      setMyCurrency(inputValue.toUpperCase());
    }
    setModalVisible(false);
    setInputValue('');
    setEditType(null);
  };

  return (
    <SafeAreaView className="bg-darkColor w-full flex-1 px-5">
      <Text className="text-white text-3xl">Settings</Text>

      {/* User name row */}
      <Pressable
        className="flex-row items-center gap-5 mt-6"
        onPress={() => {
          setEditType('name');
          setInputValue(userName ?? '');
          setModalVisible(true);
        }}
      >
        <View className="bg-purple-700 p-2 rounded-full w-[45px]">
          <Image
            source={require('@/assets/images/person.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <Text className="text-white text-2xl">
          {userName ?? 'Tap to set name'}
        </Text>
      </Pressable>

      {/* Currency row */}
      <Pressable
        className="flex-row items-center gap-5 mt-6"
        onPress={() => {
          setEditType('currency');
          setInputValue(myCurrency ?? '');
          setModalVisible(true);
        }}
      >
        <View className="bg-purple-700 p-2 rounded-full w-[45px]">
          <Image
            source={require('@/assets/images/currency.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <Text className="text-white text-2xl">
          {myCurrency ?? 'Tap to set currency'}
        </Text>
      </Pressable>

      {/* Edit Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/60 px-5">
          <View className="bg-[#2D2A35] p-6 rounded-2xl w-full">
            <Text className="text-white text-xl font-semibold mb-3">
              {editType === 'name' ? 'Update Name' : 'Update Currency'}
            </Text>

            {editType === 'name' ? (
              <RNTextInput
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={`Enter ${editType}`}
                placeholderTextColor="#999"
                style={{
                  backgroundColor: '#444',
                  color: 'white',
                  borderRadius: 10,
                  padding: 10,
                  fontSize: 16,
                  marginBottom: 20,
                }}
              />
            ) : (
              <FlatList
                data={currencyOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => setInputValue(item)}
                    className={`px-4 py-3 rounded-lg mb-2 ${
                      inputValue === item ? 'bg-purple-700' : 'bg-[#444]'
                    }`}
                  >
                    <Text className="text-white text-lg">{item}</Text>
                  </Pressable>
                )}
                style={{ marginBottom: 20 }}
              />
            )}

            <View className="flex-row justify-end gap-4">
              <Pressable
                onPress={() => setModalVisible(false)}
                className="bg-gray-600 px-4 py-2 rounded-lg"
              >
                <Text className="text-white">Cancel</Text>
              </Pressable>
              <Pressable
                onPress={handleSave}
                className="bg-purple-700 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-bold">Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Settings;
