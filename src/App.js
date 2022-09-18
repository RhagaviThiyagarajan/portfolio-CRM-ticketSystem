
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally

import EntrytPage from './page/entry/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import DashboardPage from './page/dashboard/DashboardPage';
import AddTicket from './page/newTicket/AddTicket';
import AddTicketForm from './components/AddTicketForm/AddTicketForm';

function App() {
  return (
    <div className="App">
   
  {/* <EntrytPage/> */}
  {/* <DefaultLayout> */}
  {/* <DashboardPage/> */}
  {/* </DefaultLayout> */}
  <AddTicket/>
 

 
    </div>
  );
}

export default App;
