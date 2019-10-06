import db from './firestore';

const dbCollection = 'newsletter';

export const create = async (email) => {
  try {
    const docRef = await db.collection(dbCollection).add({
      email,
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