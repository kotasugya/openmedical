import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export const SimpleBackdrop = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}


// import AppContext from "./context";

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true
//     };
//   }

//   async componentDidMount() {
//     try {
//       const resp= await axios.get("/api/my/profile");
//       const user = resp.data;
//       this.setState({ user });
//     } catch (e) {
//       if (e.response.status === 401) {
//         const user = {};
//         this.setState({ user });
//       } else {
//         //401エラー以外のエラーが返ってきた場合の処理を記述
//       }
//     }
//     this.setState({ loading: false });
//   }

//   render() {
//     const { loading, user } = this.state;
//     const style = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" };
//     if (loading) {
//       return (
//         <div style={style}>
//           <ActivityIndicator size="large" />
//         </div>
//       );
//     }
//     return (
//       <AppContext.Provider value={{ user }}>
//         <BrowserRouter>
//           {/*ここで各コンポーネントのルーティングを設定する*/}
//         </BrowserRouter>
//       </AppContext.Provider>
//     );
//   }
// }

// export default App;