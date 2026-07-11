import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { ExperienceDetail } from '@/pages/ExperienceDetail';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
