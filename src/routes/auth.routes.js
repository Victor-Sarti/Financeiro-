import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import pagina1 from '../paginas/pagina1';
import pagina2 from '../paginas/pagina2';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.paginas
        name="pagina1"
        component={pagina1}
      />

      <AuthStack.paginas
        name="pagina2"
        component={pagina2}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;