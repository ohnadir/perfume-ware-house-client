import { useEffect, useState } from 'react';

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch('https://ancient-bayou-60727.herokuapp.com/perfume')
            .then(res => res.json())
            .then(data => {
                setPerfumes(data);
            })
    },[])
    return [perfumes, setPerfumes];
};

export default usePerfumes;