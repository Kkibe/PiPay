import React, { useEffect } from 'react'
import { TextInput, View } from 'react-native'
import auth from '../../models/auth';

export default function ResetScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setIsEmail = false;
    }, 2000);
  }, [isEmail]);


  const handleResetPassword = () => {
    auth.resetPassword(email, password, code, isEmail);
    navigation.replace("Login");
  };

  
  return (
    <View>
      <Text>Reset Password</Text>
      <TextInput         
        style={style.input}
        placeholder={isEmail ? "000000" : "Email"}
        onChangeText={text => isEmail ? setCode(text) : setEmail(text)}
        value={isEmail ? code : email}
        editable={isEmail ? !isEmail : isEmail}/>
      { code && <TextInput    
        style={style.input}
        placeholder={"Password"}
        onChangeText={text => setPassword(text)}
        value={password}/>}
      <TouchableOpacity onPress={isEmail ? () => {
        handleResetPassword
        setIsEmail(false);
      } : () => {
        handleResetPassword
        setIsEmail(true);
      }}>
        <Text style={style.clickable}>{isEmail ? "Submit" : "Get Code"} </Text>
      </TouchableOpacity>
      { isEmail &&<Text style={style.clickable}>Enter the code sent to your email</Text>}
    </View>
  )
}
