## Pré-requisitos para rodar localmente

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/albavxs/PLapp.git
   cd PLapp
   ```

2. **Node.js**:  Certifique-se de que o [Node.js](https://nodejs.org/) está instalado no seu sistema.
   
3. **Android Studio**: Certifique-se de que o [Android Studio](https://developer.android.com/) está instalado no seu sistema.
   
   Passos para rodar no Android Studio (emulador):
   1. Abra o Android Studio.
   2. Vá até **Tools > AVD Manager** (Android Virtual Device Manager).
   3. Clique em **Create Virtual Device**.
   4. Escolha o tipo de dispositivo (por exemplo, Pixel 4, versao 34 recomendada) e clique em **Next**.
   5. Inicie o dispositivo.

4. **Xcode (somente macOS)**:
   Certifique-se de que o Xcode está instalado no seu sistema.
   1. Abra o Xcode e vá até **Xcode > Preferences > Locations** para garantir que a linha de comando do Xcode está configurada corretamente.
   2. Simulador iOS: Abra o Xcode, clique em **Xcode > Open Developer Tool > Simulator**. Isso abrirá o simulador de dispositivos iOS, onde você pode rodar seu app em um dispositivo   simulado. 


5. **Dependências do Projeto**: Instale as dependências do projeto com:
   ```bash
   npm install
   ```
   
6. **Dependências da API **: Instale as dependências com:
   ```bash
   npm install express
   npm install axios
   ```


