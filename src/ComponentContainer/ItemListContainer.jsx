import './ItemListConteiner.scss'

const ItemListContainer = ({ greeting, myName }) => {
    return (
        <div className='item-list-container'>
            <p>
                {greeting} 
                {myName}
            </p>
        </div>
    );
};

export default ItemListContainer;
