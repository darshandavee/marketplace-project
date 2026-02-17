import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./ProductPage.css"

// const useGoBack = (fallback: string) => {
//  const navigate = useNavigate();
//  const location = useLocation();

//   return useCallback(() => {
//     if (location.state.canGoBack) {
//       navigate(-1);
//     } else {
//       navigate(fallback, { replace: true });
//     }
//   }, [location, fallback]);
// }

export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}>🡸</button>
    );
};
