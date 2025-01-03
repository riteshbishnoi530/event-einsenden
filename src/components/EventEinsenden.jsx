import React, { useState } from 'react';
import { AddIcon } from '../utils/icons';

function EventEinsenden() {
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        date: '',
        location: '',
        price: '',
        details: '',
    });

    const handleImage = (e) => {
        const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setImages(newImages);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, images });
    };

    return (
        <div className='bg-off-primary py-[60px] max-md:py-10 max-sm:py-8 px-4'>
            <div className='max-w-[768px] mx-auto'>
                <h1 className='text-4xl font-bold text-center max-md:text-3xl max-sm:text-2xl leading-tight'>Event einsenden</h1>
                <p className='text-xl font-light text-neutral-500 text-center mt-5 max-md:mt-3 max-sm:mt-2 max-md:text-lg max-sm:text-base leading-normal'>
                    At vero eos et accusam et justo duo dolores et ea rebum...
                </p>
                <form className='flex flex-col gap-5 max-md:gap-4 max-sm:gap-3 mt-5' onSubmit={handleSubmit}>
                    <div className='flex items-center border bg-white border-off-grey rounded-[30px] py-[17.5px] px-4'>
                        <select
                            name="category"
                            className='w-full outline-none'
                            onChange={handleChange}
                            value={formData.category}
                        >
                            <option value="" disabled>Kategorie</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 bg-white w-full rounded-[30px] py-2 px-4 border border-off-grey border-dashed'>
                        {images.map((image, index) => (
                            <img key={index} className='max-w-24 h-24' src={image} alt="img" />
                        ))}
                        <input
                            accept="image/*"
                            multiple
                            onChange={handleImage}
                            type="file"
                            hidden
                            id="file"
                        />
                        <label className='bg-white w-24 h-20 flex items-center justify-center border border-off-grey rounded-lg border-dashed' htmlFor="file">
                            <AddIcon />
                        </label>
                    </div>
                    <div className='flex gap-5 max-md:gap-4 max-sm:gap-3 max-sm:flex-col'>
                        <input
                            required
                            className='max-sm:w-full text-sm outline-none placeholder:font-bold w-1/2 border placeholder:text-neutral-500 border-off-grey rounded-[30px] py-[17.5px] px-4'
                            placeholder='Titel'
                            name="title"
                            onChange={handleChange}
                            value={formData.title}
                        />
                        <input
                            required
                            className='max-sm:w-full text-sm outline-none placeholder:font-bold w-1/2 border placeholder:text-neutral-500 border-off-grey rounded-[30px] py-[17.5px] px-4'
                            placeholder='Datum'
                            name="date"
                            onChange={handleChange}
                            value={formData.date}
                        />
                    </div>
                    <div className='flex gap-5 max-md:gap-4 max-sm:gap-3 max-sm:flex-col'>
                        <input
                            required
                            className='max-sm:w-full text-sm outline-none placeholder:font-bold w-1/2 border placeholder:text-neutral-500 border-off-grey rounded-[30px] py-[17.5px] px-4'
                            placeholder='Standort'
                            name="location"
                            onChange={handleChange}
                            value={formData.location}
                        />
                        <input
                            required
                            className='max-sm:w-full text-sm outline-none placeholder:font-bold w-1/2 border placeholder:text-neutral-500 border-off-grey rounded-[30px] py-[17.5px] px-4'
                            placeholder='Preis'
                            name="price"
                            onChange={handleChange}
                            value={formData.price}
                        />
                    </div>
                    <textarea
                        required
                        rows={5}
                        className='placeholder:pt-10 text-sm outline-none placeholder:font-bold w-full border placeholder:text-neutral-500 border-off-grey rounded-[30px] py-[17.5px] px-4'
                        placeholder='Details zur Veranstaltung'
                        name="details"
                        onChange={handleChange}
                        value={formData.details}
                    ></textarea>
                    <button
                        type="submit"
                        className='font-bold bg-[#0071BB] text-white py-4 px-[155px] max-md:px-28 max-sm:px-10 w-fit rounded-[30px] mx-auto'
                    >
                        Event einsenden
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EventEinsenden;
