import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (name ,value, object = false) => {
    try {
        if(object){
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(name , jsonValue);
        }else{
            await AsyncStorage.setItem(name, value)
        }
    } catch (e) {
        // saving error
        console.log(e);
    }
};

async function getData (name, obj)  {
    try {
        const value = await AsyncStorage.getItem(name);
        if (value === null ) return;
        if(obj){
            return JSON.parse(value)
        }else{
            return value
        }
        return value

    } catch (e) {
        // error reading value
        console.log(e);
    }
};

const removeValue = async (name) => {
    try {
      await AsyncStorage.removeItem(`${name}`)
    } catch(e) {
      // remove error
    }

  }

export { storeData, getData, removeValue }