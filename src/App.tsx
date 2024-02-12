import styles from './App.module.css';
import { OptionBar } from './ui/optionbar/optionBar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IntroDocumentScanner } from './pages/introPages/introDocumentScanner/IntroDocumentScanner';
import { SignAndStamp } from './pages/introPages/sign&Stamp/Sign&Stamp';
import { BatchScanning } from './pages/introPages/batchScanning/BatchScanning';
import { AdvancedFilters } from './pages/introPages/advancedFilters/AdvancedFilters';
import { ExportAndShare } from './pages/introPages/export&Share/Export&Share';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <OptionBar />,
      children: [
        { path: '/', element: <IntroDocumentScanner /> },
        { path: '/sign&stamp', element: <SignAndStamp /> },
        { path: '/batchScanning', element: <BatchScanning /> },
        { path: '/advancedFilters', element: <AdvancedFilters /> },
        { path: '/export&share', element: <ExportAndShare /> },
      ],
    },
  ]);
  return (
    <div className={styles.main}>
      {/* <header>
        <h1>HubX Frontend Assignment</h1>
      </header> */}

      <RouterProvider router={router} />
    </div>
  );
}
