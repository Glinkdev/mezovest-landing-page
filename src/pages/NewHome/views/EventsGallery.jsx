import React from 'react';

function EventsGallery() {

    const eventList = [
        {
            img: "event-1.png",
            title: "Mezovest Team",
            body: "Experience the power of our secure and user-friendly POS terminal. Seamlessly sell to your customers, process card payments, generate invoices, and even purchase cooking gas. Unlock a world of possibilities with our versatile solution.",
        },
        {
            img: "event-2.png",
            title: "Mezovest Team",
            body: "Experience the power of our secure and user-friendly POS terminal. Seamlessly sell to your customers, process card payments, generate invoices, and even purchase cooking gas. Unlock a world of possibilities with our versatile solution.",
        },
        {
            img: "event-3.png",
            title: "Mezovest Team",
            body: "Experience the power of our secure and user-friendly POS terminal. Seamlessly sell to your customers, process card payments, generate invoices, and even purchase cooking gas. Unlock a world of possibilities with our versatile solution.",
        }
    ]

    return (
        <div className='py-7 md:pt-14 pb-4 px-6 xl:px-36 !bg-white h-full min-h-fit font-poppins'>
            <h2 className="text-center text-[#203035] text-[40px] font-medium mb-4 ">Events & Galleries</h2>
            
            <div className="overflow-auto no-scrollbar ">
                <ul className="flex gap-[20px] w-fit leading-[24px] ">
                    {eventList.map((item, idx) => {
                        return <li key={idx} className="w-[464px] ">
                            <img className="h-[580px] w-full object-cover rounded-[20px] " src={"/img/" + item.img} alt="" />
                            <h3 className="mt-[20px] mb-[20px] font-medium text-[#1D1D1D] text-[24px] " >{item.title}</h3>
                            <p className="text-[#203035] font-normal text-[14px]  ">{item.body}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default EventsGallery