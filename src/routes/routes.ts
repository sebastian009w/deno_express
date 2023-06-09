import { Router } from "npm:express";
import {
  __init__,
  create_task,
  update_task,
  delete_task,
} from "../controllers/controllers.ts";

const router = Router();

router.get("/", __init__);
router.post("/", create_task);
router.put("/:id", update_task);
router.delete("/:id", delete_task);

export default router;
