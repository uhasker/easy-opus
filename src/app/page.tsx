import { db } from "@/db";
import { projectTable } from "@/db/schema";
import { SignIn, auth } from "@clerk/nextjs";
import { ProjectList } from "./project-list";
import { eq } from "drizzle-orm";

export default async function Home() {
  const { userId } = auth();

  if (userId === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
    );
  }

  const projects = await db
    .select()
    .from(projectTable)
    .where(eq(projectTable.userId, userId));

  return <ProjectList userId={userId} projects={projects} />;
}
