import {useContext} from "react";
import {AuthContext} from "../context/auth.js"


export default function useAuth(){
  const context = useContext(AuthContext);

  return context
}