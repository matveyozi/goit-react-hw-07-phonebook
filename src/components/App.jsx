import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'
import Title from './Title/Title';
import Section from './Section/Section';
import Container from './Container/Container';




export default function App() {
    return (
      <Section>
        <Container>
        <Title title={'Phonebook'}></Title>
        <ContactForm />
        <Filter />
        <Title title={'Contacts'}/>
        </Container>
        <ContactList />
    </Section>
    )
}

