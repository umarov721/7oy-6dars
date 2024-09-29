import { Link } from "react-router-dom"
import Card from "../../components/Card"

const kino = () => {
    return (
        <div>
            <ul className="flex gap-4 mt-4 px-[50px] items-center text-white">
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Все</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Кино</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Театр</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Концерты</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Концерты</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red]"><img src="" alt="" />Другие</button></li>
                <li><button className="w-32 h-12 bg-[#111111] rounded-xl hover:bg-[red] ml-[250px]"><img src="" alt="" />Залы</button></li>
            </ul>
            <div className="contents__block mt-4 mb-[100px] text-white">
                <div className="flex gap-3">
                    <Link to={'/kinolar'}> <button className="w-16 h-16  border-[#c72020] border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 28</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 28</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 29</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 30</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 31</button></Link>
                    <Link to={'/kinolar'}> <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212] ml-16" >Чт <br /> 1</button></Link>
                    <Link to={'/kinolar'}> <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 2</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 3</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 4</button></Link>
                    <Link to={'/kinolar'}> <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 5</button></Link>
                    <Link to={'/kinolar'}> <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 6</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 7</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 8</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 9</button></Link>
                    <Link to={'/kinolar'}> <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 10</button></Link>
                    <Link to={'/kinolar'}>  <button className="w-16 h-16   border-[2px] rounded-xl bg-[#121212]" >Чт <br /> 11</button></Link>
                </div>
                <div className="contents__block__content flex justify-between align-center ">
                    <h3>На неделе</h3>
                    <a href="#" className="text-[red]">View all  </a>
                </div>
                <Card />
            </div>

            <div className="contents__block mt-4 mb-[100px] text-white">
                <div className="contents__block__content flex justify-between align-center ">
                    <h3>Кино</h3>
                    <a href="#" className="text-[red]">View all  </a>
                </div>
                <Card />
            </div>


        </div>

    )
}

export default kino