import db from './firestore';

const dbCollection = 'enquiries';

export const create = async ({name, email, message}) => {
  try {
    const docRef = await db.collection(dbCollection).add({
      name,
      email,
      message,
      createdAt: new Date()
    });
    if (docRef) {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}