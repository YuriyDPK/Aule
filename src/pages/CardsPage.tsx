import React, { FormEvent, useState } from 'react'

function CardsPage() {
    const [word, setWord]: string = useState('');
    const [traslate, setTraslate]: string = useState('');
    const [clue, setClue]: string = useState('');
    const [category, setCategory]: string = useState('');
    const [card, setCard] = useState([]);
    function handlerForm(e: FormEvent){
        e.preventDefault();
    }
    function addWord(){
        const updateCard = [...card, [word, traslate, clue, category]];

    }
    function handlerWordText(e){
        setWord(e.target.value);
    }
    function handlerClueText(e){
        setClue(e.target.value);
    }
    function handlerTranslateText(e){
        setTraslate(e.target.value);
    }
    function handlerCategoryText(e){
        setCategory(e.target.value);
    }
  return (
    <div className='bg-gray-200 p-20 w-1/3 mx-auto mt-5'>
        <form onSubmit={handlerForm} className='flex flex-col gap-5 justify-center'>
            <select className='p-2 w-full rounded-sm'
            select={category}
            onChange={handlerCategoryText}
            >
                <option disabled selected>Категория</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <input type="text" placeholder='Слово' className='p-2 w-full rounded-sm'
            value={word}
            onChange={handlerWordText}
            />
            <input type="text" placeholder='Перевод' className='p-2 w-full rounded-sm'
            value={traslate}
            onChange={handlerTranslateText}
            />
            <input type="text" placeholder='Подсказка' className='p-2 w-full rounded-sm'
            value={clue}
            onChange={handlerClueText}
            />
            <input type="file" placeholder='Выберите файл' className='p-2 w-full rounded-sm'/>
            <button onClick={addWord} className='bg-cyan-500 text-white p-1'>Добавить</button>
            
        </form>
    </div>
  )
}

export default CardsPage