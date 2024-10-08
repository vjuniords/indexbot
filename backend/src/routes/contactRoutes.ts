import express from "express";
import isAuth from "../middleware/isAuth";

import * as ContactController from "../controllers/ContactController";
import * as ImportPhoneContactsController from "../controllers/ImportPhoneContactsController";

const contactRoutes = express.Router();

contactRoutes.post(
  "/contacts/import",
  isAuth,
  ImportPhoneContactsController.store
);

contactRoutes.get("/contacts", isAuth, ContactController.index);

contactRoutes.get("/contacts/list", isAuth, ContactController.list);

contactRoutes.get("/contacts/:contactId", isAuth, ContactController.show);

contactRoutes.post("/contacts", isAuth, ContactController.store);

contactRoutes.put("/contacts/:contactId", isAuth, ContactController.update);

contactRoutes.delete("/contacts/:contactId", isAuth, ContactController.remove);

contactRoutes.get("/contacts/profile/:number", isAuth, ContactController.getContactProfileURL);

contactRoutes.put("/contacts/toggleDisableBot/:contactId", isAuth, ContactController.toggleDisableBot);

contactRoutes.post("/contactsImport", isAuth, ContactController.importXls);

contactRoutes.delete("/delete-contacts", isAuth, ContactController.deleteAllContactsFromCompanie);

export default contactRoutes;
