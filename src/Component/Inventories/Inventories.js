import React from 'react';
import AllInventories from '../AllInventories/AllInventories';
import usePerfumes from '../Hooks/usePerfumes';

const Inventories = () => {
    const [perfumes] = usePerfumes();
    return (
        <div>
            <div>
                <div className='my-16'>
                    {
                        perfumes.map(perfume => <AllInventories
                            key={perfume._id}
                            perfume={perfume}
                        ></AllInventories>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;