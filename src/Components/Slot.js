import React, { useState } from 'react';

const Slot = () => {
    const slots = {
        morning: ['11:30 AM'],
        afternoon: ['12:00 PM', '12:30 PM'],
        evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']
    };

    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    return (
        <div className="p-8">
            {Object.keys(slots).map((timeOfDay, index) => (
                <div key={index} className="mb-8">
                    <div className="flex items-center mb-4">
                        <p className="w-32 capitalize">{timeOfDay}</p>
                        <div className="flex-1 grid grid-cols-4 gap-4">
                            {slots[timeOfDay].map((slot, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSlotClick(slot)}
                                    className={`p-2 rounded border-2 ${selectedSlot === slot ? 'border-green-500 text-green-500' : 'border-blue-500 bg-transparent text-blue-500'} whitespace-nowrap`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className="my-4 border-gray-300" />
                </div>
            ))}
        </div>
    );
}

export default Slot;
