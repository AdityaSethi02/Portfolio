
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export const Cards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Web Developer</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Software Developer</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Fullstack Developer</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                </CardContent>
            </Card>

        </div>
    )
}