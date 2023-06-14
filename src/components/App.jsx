import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'
import Title from './Title/Title';
import Section from './Section/Section';




export default function App() {
    return (
      <Section>
        <Title title={'Phonebook'}></Title>
        <ContactForm />
        <Filter />
        <Title title={'Contacts'}/>
        <ContactList />
    </Section>
    )
}

