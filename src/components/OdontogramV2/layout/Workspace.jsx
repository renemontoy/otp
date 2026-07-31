import "./Workspace.css";

function Workspace({

    toolbar,

    canvas,

    leftPanel,

    rightPanel

}){

    return(

        <div className="workspace">

            <div className="workspaceToolbar">

                {toolbar}

            </div>

            <div className="workspaceCanvas">

                {canvas}

            </div>

            <div className="workspaceBottom">

                <div className="workspaceLeft">

                    {leftPanel}

                </div>

                <div className="workspaceRight">

                    {rightPanel}

                </div>

            </div>

        </div>

    );

}

export default Workspace;