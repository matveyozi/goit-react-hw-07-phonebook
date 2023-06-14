import React from 'react'
import cssModlue from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {

	const defaultText = 'Not have a contacts'

	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);


	const filteredList = contacts.filter(item => {
		return item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim()) || item.number.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
	})
	return <ul className={cssModlue.list}>
		{
			filteredList ? filteredList.map((item) => {
				return <ContactItem key={item.id} contact={item} />
			}) : defaultText
		} 
	</ul>
}
