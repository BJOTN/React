import { useState } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentPosition = ()=>{
     setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false)
      },
      (errors)=>{
        setError(errors.message);
        setLoading(false)
      }
    );
  };

  return {location,error,loading,getCurrentPosition};
}
