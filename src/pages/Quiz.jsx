import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

export default function Quiz() {
  const location = useLocation();
  const { selectedConsonantGroups, selectedVowelGroups } = location.state;

  return (
    <>
      <Header />
      <div>
        <h2>Quiz Page</h2>
        <p>Selected Consonant Groups: {JSON.stringify(selectedConsonantGroups)}</p>
        <p>Selected Vowel Groups: {JSON.stringify(selectedVowelGroups)}</p>
        {/* Add quiz logic here */}
      </div>
    </>
  )
}
